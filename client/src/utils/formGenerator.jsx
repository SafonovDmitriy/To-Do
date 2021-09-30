import { Box, TextField } from "@material-ui/core";
import { Button, Checkbox } from "../components/UI";
// example form with one field
// form:[{
//     name: String(*),
//     value: String(*),
//     group:Number
//     type: text || checkbox
//     validationFunc: [{ func: func, message: String,any:{anyPropsForValidation} }],
//     any: { anyProps },
//  }]

// example titleGroups:{
// [numberGroun]:String
// }
export const formGeneratorTypes = {
  text: "text",
  checkbox: "checkbox",
};
const formGenerator = ({
  form = [],
  error = {},
  setValue = () => {},
  setError = () => {},
  className,
  submitText,
  titleGroups = {},
  onSubmit = () => {},
}) => {
  const _formJSX = [];
  const _groupFieldsJSX = {};

  const createField = (field) => (
    <TextField
      key={field.name}
      name={field.name}
      value={field.value}
      error={!!error[field.name]}
      helperText={error[field.name]}
      onChange={changeFieldHendler}
      {...field.any}
    />
  );
  const createCheckBox = (field) => (
    <Checkbox
      key={field.name}
      name={field.name}
      checked={field.value}
      onChange={changeFieldHendler}
      {...field.any}
    />
  );

  const onSubmitHendler = (e) => {
    e.preventDefault();
    validationField();

    const _form = form.reduce((acc, item) => {
      Object.assign(acc, { [item.name]: item.value });
      return acc;
    }, {});
    for (const key in _form) {
      if (!_form[key].trim().length) {
        return;
      }
    }
    onSubmit(_form);
  };

  const validationField = (_form = form) => {
    let _errors = { ...error };
    for (const field of _form) {
      if (field.validationFunc) {
        for (const valid of field.validationFunc) {
          valid.func(field.value, { ...valid.any })
            ? Object.assign(_errors, { [field.name]: valid.message })
            : Object.assign(_errors, { [field.name]: "" });
        }
      }
    }
    setError(_errors);
  };
  const whereValue = (item) => {
    switch (item.type) {
      case formGeneratorTypes.checkbox:
        return "checked";

      default:
        return "value";
    }
  };
  const changeFieldHendler = (e) => {
    let indexChangesItem;
    const _form = form.map((item, idx) => {
      if (item.name === e.target.name) {
        indexChangesItem = idx;
        return { ...item, value: e.target[whereValue(item)] };
      }
      return item;
    });

    validationField([_form[indexChangesItem]]);
    setValue(_form);
  };
  const getComponent = (field) => {
    switch (field.type) {
      case formGeneratorTypes.checkbox:
        return createCheckBox(field);

      default:
        return createField(field);
    }
  };
  for (const field of form) {
    let numberGroup = field.group || 100;
    if (!_groupFieldsJSX[numberGroup]) {
      _groupFieldsJSX[numberGroup] = [];
    }
    _groupFieldsJSX[numberGroup].push(getComponent(field));
  }

  for (const key in _groupFieldsJSX) {
    if (key !== 100) {
      _formJSX.push(
        <Box key={key} style={{ display: "contents" }}>
          {titleGroups[key] ? (
            <>
              <h2 children={titleGroups[key]} />
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {_groupFieldsJSX[key].map((item) => item)}
              </Box>
            </>
          ) : (
            _groupFieldsJSX[key].map((item) => item)
          )}
        </Box>
      );
    } else {
      _formJSX.push(_groupFieldsJSX[key].map((item) => item));
    }
  }
  const disabledBtn =
    Object.values(error).findIndex((item) => !!item.length) !== -1;

  return form.length ? (
    <form className={className ? className : null} onSubmit={onSubmitHendler}>
      {_formJSX}
      {submitText && (
        <Button disabled={disabledBtn} type="submit">
          {submitText}
        </Button>
      )}
    </form>
  ) : null;
};
export default formGenerator;

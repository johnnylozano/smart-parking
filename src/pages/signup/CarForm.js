import { FormWrapper } from "./FormWrapper";

export function CarForm({
  carMake,
  carModel,
  carYear,
  carColor,
  updateFields,
}) {
  return (
    <FormWrapper title="Car Registration">
      <label>Car Make</label>
      <input
        autoFocus
        required
        type="text"
        value={carMake}
        onChange={(e) => updateFields({ carMake: e.target.value })}
      />
      <label>Car Model</label>
      <input
        required
        type="text"
        value={carModel}
        onChange={(e) => updateFields({ carModel: e.target.value })}
      />
      <label>Car Year</label>
      <input
        required
        type="text"
        value={carYear}
        onChange={(e) => updateFields({ carYear: e.target.value })}
      />
      <label>Car Color</label>
      <input
        required
        type="text"
        value={carColor}
        onChange={(e) => updateFields({ carColor: e.target.value })}
      />
    </FormWrapper>
  );
}

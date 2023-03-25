import { FormWrapper } from "./FormWrapper";
import { FieldInputField, Input } from "./style";

export function CarForm({
  carMake,
  carModel,
  carYear,
  carColor,
  licensePlate,
  updateFields,
}) {
  return (
    <FormWrapper title="Car Registration">
      <FieldInputField>
        <Input
          autoFocus
          required
          type="text"
          placeholder="Car Make"
          value={carMake}
          onChange={(e) => updateFields({ carMake: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <Input
          required
          type="text"
          placeholder="Car Model"
          value={carModel}
          onChange={(e) => updateFields({ carModel: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <Input
          required
          type="text"
          placeholder="Car Year"
          value={carYear}
          onChange={(e) => updateFields({ carYear: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <Input
          required
          type="text"
          placeholder="Car Color"
          value={carColor}
          onChange={(e) => updateFields({ carColor: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <Input
          required
          type="text"
          placeholder="License Plate"
          value={licensePlate}
          onChange={(e) => updateFields({ licensePlate: e.target.value })}
        />
      </FieldInputField>
    </FormWrapper>
  );
}

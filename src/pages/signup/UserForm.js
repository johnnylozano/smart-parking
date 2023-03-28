import { FormWrapper } from "./FormWrapper";
import { FieldInputField, Input } from "./style";

export function UserForm({
  firstName,
  lastName,
  ksuId,
  passType,
  updateFields,
}) {
  return (
    <FormWrapper title="User Registration">
      <FieldInputField>
        <Input
          autoFocus
          required
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <Input
          required
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <Input
          required
          min={1}
          type="number"
          placeholder="KSU ID Number"
          value={ksuId}
          onChange={(e) => updateFields({ ksuId: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <select
          style={{ padding: "0.3rem", borderRadius: "6px" }}
          onChange={(e) => updateFields({ passType: e.target.value })}
        >
          <option value="invalid">Choose Parking Pass Type</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="faculty">Faculty</option>
        </select>
      </FieldInputField>
    </FormWrapper>
  );
}

import { FormWrapper } from "./FormWrapper";

export function UserForm({ firstName, lastName, ksuId, updateFields }) {
  return (
    <FormWrapper title="User Registration">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>KSU ID Number</label>
      <input
        required
        min={1}
        type="number"
        value={ksuId}
        onChange={(e) => updateFields({ ksuId: e.target.value })}
      />
    </FormWrapper>
  );
}

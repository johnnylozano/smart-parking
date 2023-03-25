import { FormWrapper } from "./FormWrapper";
import { FieldInputField, Input } from "./style";

export function AccountForm({ email, password, updateFields }) {
  return (
    <FormWrapper title="Account Registration">
      <FieldInputField>
        <Input
          autoFocus
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <Input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
        />
      </FieldInputField>
      <FieldInputField>
        <Input type="password" placeholder="Confirm password" />
      </FieldInputField>
    </FormWrapper>
  );
}

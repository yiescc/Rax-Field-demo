import { Button, Field, Form } from "@alifd/meet";
import { createElement } from 'rax';


function Custom({ onChange }: { onChange?: (value: string) => void }) {
  return <Button onClick={() => onChange?.("123")}>123</Button>;
}

export default function App() {
  const field = Field.useField({
    onChange: (name, value) => {
      console.log(name, value);
    }
  });

  return (
    <div className="App">
      <Form
        field={field}
        labelAlign="top"
        value={{ name: "" }}
        onChange={(values) => {
          console.log(values);
        }}
      >
        <Form.Item label="Name">
          <Custom {...field.init<string>("name")} />
        </Form.Item>
      </Form>
    </div>
  );
}

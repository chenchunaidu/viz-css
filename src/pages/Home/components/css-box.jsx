import React from 'react';
import { TextInput,Button} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import CssBoxContainer from './css-box-container'

export default function Demo({applyStyles}) {
  const form = useForm({
    initialValues: {
      color:"",
      background:""
    },

    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
    },
  });

  return (
    <CssBoxContainer>

    
    <form onSubmit={form.onSubmit((values) => applyStyles(values))}>
        <div>
            CSS
        </div>
        <div style={{ display: 'flex', marginBottom: 15 }}>
            <TextInput
              placeholder="Enter color"
              label="color"
              style={{ marginRight: 20, flex: '0 0 calc(50% - 10px)' }}
              value={form.values.firstName}
              onChange={(event) => form.setFieldValue('color', event.currentTarget.value)}
              onFocus={() => form.setFieldError('color', false)}
              error={form.errors.color && 'color is required'}
              
            />

            <TextInput
              placeholder="Enter background color"
              label="Background"
              style={{ flex: '0 0 calc(50% - 10px)' }}
              value={form.values.background}
              onChange={(event) => form.setFieldValue('background', event.currentTarget.value)}
              onFocus={() => form.setFieldError('background', false)}
              error={form.errors.lastName && 'Last name should include at least 2 characters'}
              
            />
           
          </div>
          <Button type="submit">
              apply
            </Button>
    </form>
    </CssBoxContainer>
  );
}
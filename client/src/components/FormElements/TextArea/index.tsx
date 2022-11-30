import React from 'react'
import { Form, Input } from 'antd'
import { Controller } from 'react-hook-form'

interface ITextInputProps {
  label?: string
  name: string
  rules?: any
  control?: any
  placeholder?: string
  className?: string
  value?: string | number
  type?: string
  onBlur?: any
  autoComplete?: string
  disabled?: boolean
  onChange?: any
  rows: number
  maxLength?: number
}
const { TextArea } = Input

const TextInput: React.FC<ITextInputProps> = ({
  label,
  name,
  rules,
  placeholder,
  className,
  control,
  onBlur,
  autoComplete,
  disabled,
  rows,
  maxLength,
}: ITextInputProps) => (
  <Form.Item label={label} name={name} rules={rules}>
    <Controller
      render={({ field: { onBlur: onHookBlur, value, onChange } }) => (
        <TextArea
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e)}
          onBlur={() => {
            onHookBlur()
            if (onBlur) onBlur()
          }}
          maxLength={maxLength}
          disabled={disabled}
          autoComplete={autoComplete}
          className={className}
        />
      )}
      control={control}
      name={name}
    />
  </Form.Item>
)

export default TextInput

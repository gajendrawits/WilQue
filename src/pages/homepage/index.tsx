import React from 'react'
import Logo from 'assets/svg/witslogo'
import { useForm } from 'react-hook-form'
import TextArea from 'components/FormElements/TextArea'
import Button from 'components/Button'
import { yupResolver } from '@hookform/resolvers/yup'
import { MainContainer, Form, Error } from 'styles/pages/homepage'
import { messageSchema } from 'utils/validations/homepage'
import { FormData } from 'interface/pages/homepage'

const HomePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(messageSchema),
  })

  const onSubmit = handleSubmit((data: any) => console.log(data))

  return (
    <MainContainer>
      <Logo />
      <Form onSubmit={onSubmit}>
        <TextArea name="message" control={control} rows={4} placeholder="Drop your message" maxLength={100} />
        <Error>{errors.message?.message}</Error>
        <Button label="Submit" />
      </Form>
    </MainContainer>
  )
}

export default HomePage

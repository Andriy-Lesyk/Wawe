import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import Container from 'components/Container/Container';
import Validation from 'components/Validation/Validation';
import {
  Section,
  SectionTitleBox,
  SectionTitle,
  FormQuestionBox,
  QuestionBox,
  QuestionText,
  ApplicationForm,
  Input,
  Message,
  FormBtn,
  SocialLinkBox,
  SocialLink,
  SocialLinkName,
  Error,
  InputContainer,
} from './Application.styled';
import { Slash } from 'components/AboutSchool/AboutSchool.styled';
import sprite from '../../images/sprite.svg';

function Application() {
  const handleSubmit = (values, { resetForm }) => {
    console.log('submit');
    resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: '', phone: '', message: '' }}
      validationSchema={Validation}
    >
      {({ values, handleChange }) => (
        <Section>
          <Container>
            <SectionTitleBox>
              <SectionTitle>ОСТАВИТЬ ЗАЯВКУ</SectionTitle>
              <Slash>
                <use href={sprite + '#Slash'} />
              </Slash>
            </SectionTitleBox>
            <FormQuestionBox>
              <ApplicationForm>
                <InputContainer>
                  <Input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                  <Error>
                    <ErrorMessage name="name" />
                  </Error>
                </InputContainer>
                <InputContainer>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                  />
                  <Error>
                    <ErrorMessage name="phone" />
                  </Error>
                </InputContainer>
                <InputContainer>
                  <Message
                    placeholder="Оставьте сообщение, и мы свяжемся с Вами в ближайшее время"
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                  />
                  <Error>
                    <ErrorMessage name="message" />
                  </Error>
                </InputContainer>
                <FormBtn type="submit">ОТПРАВИТЬ</FormBtn>
              </ApplicationForm>
              <QuestionBox>
                <QuestionText>
                  Есть вопрос?
                  <br /> Вы можете связаться с нами:
                </QuestionText>
                <QuestionText>
                  WhatsApp, Viber, Telegram
                  <br /> +3 467 486-37-88
                </QuestionText>
                <QuestionText>
                  Avenida grandes playas 79,
                  <br /> Corralejo la Oliva Fuerteventura,
                  <br />
                  Spain. 35660
                </QuestionText>
              </QuestionBox>
            </FormQuestionBox>
            <SocialLinkBox>
              <SocialLink href="#">
                <SocialLinkName>INSTAGRAM</SocialLinkName>
              </SocialLink>
              <SocialLink href="#">
                <SocialLinkName>FACEBOOK</SocialLinkName>
              </SocialLink>
              <SocialLink href="#">
                <SocialLinkName>YOUTUBE</SocialLinkName>
              </SocialLink>
            </SocialLinkBox>
          </Container>
        </Section>
      )}
    </Formik>
  );
}

export default Application;

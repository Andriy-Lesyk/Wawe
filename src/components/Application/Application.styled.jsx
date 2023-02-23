import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Section = styled.section`
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
`;
export const SectionTitleBox = styled.div`
  display: flex;
  align-self: center;
`;
export const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 0.6px;
  color: #01353e;
`;
export const FormQuestionBox = styled.div`
  display: flex;
  margin-top: 200px;
  justify-content: space-between;
`;
export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 49px 0 71px 52px;
  width: 600px;
  background: #f8f8f8;
`;
export const QuestionText = styled.p`
  margin: 0;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.6px;
  color: #242121;
  &:not(:last-child) {
    margin-bottom: 65px;
  }
`;
export const ApplicationForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
export const Input = styled(Field)`
  width: 569px;
  height: 38px;
  border: transparent;
  border-bottom: 1px solid #dadada;
  &:not(:first-of-type) {
    margin-top: 32px;
  }
  &::placeholder {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.6px;
    color: #00b2a0;
  }
  &:hover,
  &:focus {
    border-bottom: 2px solid;
  }
`;
export const Message = styled.textarea`
  width: 569px;
  height: 156px;
  border: transparent;
  border-bottom: 1px solid #dadada;
  margin-top: 53px;
  &::placeholder {
    font-family: 'Roboto Condensed';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.6px;
    color: #00b2a0;
    width: 260px;
  }
  &:hover,
  &:focus {
    border-bottom: 2px solid;
  }
`;
export const FormBtn = styled.button`
  width: 350px;
  height: 70px;
  margin-top: 73px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.6px;
  background: #ffffff;
  color: #242121;
  border: 1px solid #c4c4c4;
  &:hover,
  &:focus {
    border: 2px solid;
  }
`;
export const SocialLinkBox = styled.div`
  margin-top: 200px;
  width: max-content;
  display: flex;
  align-self: center;
`;
export const SocialLink = styled.a`
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const SocialLinkName = styled.span`
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.6px;
  color: #242121;
  &:hover,
  &:focus {
    color: #00b2a0;
  }
`;
export const Error = styled.p`
  position: absolute;
  font-size: 12px;
  color: red;
  top: -6px;
  left: 10px;
  margin: 0;
  background-color: white;
  padding: 0 5px;
`;
export const InputContainer = styled.div`
  position: relative;
`;

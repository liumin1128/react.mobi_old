import * as Yup from 'yup'
import { makeValidate } from 'mui-rff'
import { isPhoneNumber } from '@/utils/validate'

const schema = Yup.object().shape({
  code: Yup.string().required(),
  countryCode: Yup.string().required(),
  purePhoneNumber: Yup.string().when('countryCode', (c: string, s: Yup.StringSchema) => {
    return s.test('isPhoneNumber', 'PhoneNumber Error', p => isPhoneNumber(c, p))
  }),
  nickname: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().required(),
})

const validate = makeValidate(schema)

export default validate

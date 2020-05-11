import * as Yup from 'yup'
import { makeValidate } from 'mui-rff'

const schema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
})

const validate = makeValidate(schema)

// console.log(schema)
// console.log(validate)

export default validate

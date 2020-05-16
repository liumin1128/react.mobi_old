import React from 'react'

import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText'
import { FieldMetaState, useField } from 'react-final-form'

export interface ErrorMessageProps {
  showError: boolean
  meta: FieldMetaState<any> // eslint-disable-line
  formHelperTextProps?: Partial<FormHelperTextProps>
  helperText?: string
}

export function ErrorMessage({
  showError, // eslint-disable-line
  meta,
  formHelperTextProps,
  helperText,
}: ErrorMessageProps) {
  if (showError) {
    return (
      <FormHelperText {...formHelperTextProps}>{meta.error || meta.submitError}</FormHelperText>
    )
  }

  // eslint-disable-next-line
  if (!!helperText) {
    return <FormHelperText {...formHelperTextProps}>{helperText}</FormHelperText>
  }

  return <></>
}

export interface ShowErrorProps {
  meta: FieldMetaState<any> // eslint-disable-line
}

const config = {
  subscription: {
    error: true,
    submitError: true,
    dirtySinceLastSubmit: true,
    touched: true,
    modified: true,
  },
}

export function useFieldForErrors(name: string) {
  return useField(name, config)
}

export function showError({
  meta: { submitError, dirtySinceLastSubmit, error, touched, modified },
}: ShowErrorProps) {
  return !!(((submitError && !dirtySinceLastSubmit) || error) && (touched || modified))
}

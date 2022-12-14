import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
  DatetimeLocalField,
  SelectField,
} from '@redwoodjs/forms';

type FormResponse = {
  company: string
  position: string
  stage: string
  notes: string
  offer: string
  submitted: Date
}

const ApplicationForm = (props) => {
  const onSubmit = (data: FormResponse) => {
    var newData: FormResponse = data;
    newData.submitted = new Date();
    newData.stage = data.stage
    props.onSave(newData, props?.application?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="company"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Company
        </Label>

        <TextField
          name="company"
          defaultValue={props.application?.company}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="company" className="rw-field-error" />

        <Label
          name="position"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Position
        </Label>

        <TextField
          name="position"
          defaultValue={props.application?.position}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="position" className="rw-field-error" />

        <Label
          name="stage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stage
        </Label>

        <SelectField name="stage" >
          <option>Submitted Application</option>
          <option>Phone Screen</option>
          <option>Onsite</option>
          <option>Final Round</option>
        </SelectField>

        <FieldError name="stage" className="rw-field-error" />

        <Label
          name="notes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>

        <TextField
          name="notes"
          defaultValue={props.application?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="notes" className="rw-field-error" />

        <Label
          name="offer"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Offer
        </Label>

        <SelectField name="offer" >
          <option>Yes</option>
          <option>No</option>
        </SelectField>

        <FieldError name="offer" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default ApplicationForm;

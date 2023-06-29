import { Typography } from "@material-ui/core";
import {
  BooleanField,
  BooleanInput,
  Create,
  Datagrid,
  DeleteButton,
  DeleteWithConfirmButton,
  Edit,
  EditButton,
  List,
  PasswordInput,
  ReferenceField,
  ReferenceInput,
  Show,
  ShowButton,
  SimpleForm,
  SimpleShowLayout,
  TextField,
  TextInput,
  required,
} from "react-admin";

const DataFilter = [<TextInput label="Cari" source="q" alwaysOn />];

export const CategoryList = () => (
  <List filters={DataFilter}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="slug" />
      <BooleanField source="active" />
      <TextField source="updated_at" />
      <ShowButton />
      <EditButton />
      <DeleteWithConfirmButton confirmContent="Are you sure ?" />
    </Datagrid>
  </List>
);

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <ReferenceInput source="parent_id" reference="categories" />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="slug" validate={[required()]} />
      <BooleanInput source="active" />
    </SimpleForm>
  </Create>
);

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="parent_id" reference="categories" />
      <TextInput source="name" validate={[required()]} />
      <TextInput source="slug" validate={[required()]} />
      <BooleanInput source="active" />
    </SimpleForm>
  </Edit>
);

export const CategoryShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="parent_id" reference="categories">
        <TextField source="name" />
      </ReferenceField>

      <TextField source="name" />
      <TextField source="email" />
      <DeleteWithConfirmButton confirmContent="Are you sure ?" />
    </SimpleShowLayout>
  </Show>
);

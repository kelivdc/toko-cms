import { Typography } from "@material-ui/core";
import { Create, Datagrid, DeleteButton, DeleteWithConfirmButton, Edit, EditButton, List, PasswordInput, Show, ShowButton, SimpleForm, SimpleShowLayout, TextField, TextInput, required } from "react-admin";

const DataFilter = [
    <TextInput label="Cari" source="q" alwaysOn />
]

export const UserList = () => (
    <List filters={DataFilter}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <TextField source="updated_at" />
            <ShowButton />
            <EditButton />
            {/* <DeleteButton confirmTitle="Hapus Title" confirmContent="Are you sure to delete ?" /> */}
            <DeleteWithConfirmButton confirmContent="Are you sure ?" />
        </Datagrid>
    </List>
)

export const UserCreate = () => (
    <Create>
        <SimpleForm>            
            <TextInput source="name" validate={[required()]}  />
            <TextInput source="email" type="email" validate={[required()]} autoComplete="off" value=""  />
            <PasswordInput source="password" validate={[required()]} autoComplete="off" value="" inputProps={{ autocomplete: 'current-password' }} />                        
        </SimpleForm>
    </Create>
)

export const UserEdit = () => (
    <Edit>
        <SimpleForm>            
            <TextInput source="name" validate={[required()]}  />            
        </SimpleForm>
    </Edit>
)

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <DeleteWithConfirmButton confirmContent="Are you sure ?" />
        </SimpleShowLayout>
    </Show>
)
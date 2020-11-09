import React from 'react';
import {Formik, Form, Field} from "formik";

const Index = () => {
    return (
        <Formik initialValues={{
            artist: "",
            songName: "",
            yearReleased: "",
        }}
        onSubmit={(values) => {
            console.log(values)
        }}>
        <Form>
            <label>
                Song Name
                <Field name="songName" type="text"></Field>
            </label>
            <label>
                Artist
                <Field name="artist" type="text"></Field>
            </label>
            <label>
                Year Released
                <Field name="yearReleased" type="text"></Field>
            </label>
            <button type="submit">Submit</button>
        </Form>
        </Formik>
    )
}
export default Index;
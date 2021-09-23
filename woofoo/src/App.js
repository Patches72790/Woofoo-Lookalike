import CurrentForm from "./components/CurrentForm";
import NavBar from "./components/NavBar";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import * as actionCreator from "./actions/actionCreator";
import ButtonList from "./data/buttonList";
import EditInputs from "./components/EditInputs";
import FieldButtons from "./components/FieldButtons";

function mapStateToProps(state) {
    return {
        currentFields: state.formData.currentFields,
        formId: state.formData.formId,
        editing: state.formData.editing,
        savedForms: state.savedForms,
        isSignedIn: state.authDetails.isSignedIn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addField: (type) => dispatch(actionCreator.addField(type)),
        removeField: (index) => dispatch(actionCreator.removeField(index)),
        updateField: (index, fieldSetting) =>
            dispatch(actionCreator.updateField(index, fieldSetting)),
        beginEditing: (index) => dispatch(actionCreator.beginEditing(index)),
        saveForm: (currentFields, formId) =>
            dispatch(actionCreator.saveFormAsync(currentFields, formId)),
        createForm: (formId) => dispatch(actionCreator.createForm(formId)),
        loadForm: (formId, savedForms) =>
            dispatch(actionCreator.loadForm(formId, savedForms)),
        syncForms: () => dispatch(actionCreator.loadFormsFromDB()),
        signInWithEmail: (email, password) =>
            dispatch(actionCreator.signInAsync(email, password)),
    };
}

const FormApp = ({
    addField,
    currentFields,
    formId,
    removeField,
    updateField,
    beginEditing,
    saveForm,
    createForm,
    savedForms,
    history,
    syncForms,
    editing,
    signInWithEmail,
    isSignedIn,
}) => {
    // synchronize forms with db and redux state
    useEffect(() => {
        syncForms();
    }, [syncForms, savedForms.length]);

    const handleSignIn = () => {
        signInWithEmail("testuser@unreal.com", "password");
    };

    return (
        <>
            {isSignedIn ? (
                <>
                    <NavBar createForm={createForm} savedForms={savedForms} />
                    <div id="stage">
                        <div id="side">
                            <FieldButtons
                                buttonList={ButtonList}
                                addField={addField}
                            />
                            {editing.currentlyEditing && (
                                <EditInputs
                                    selectedField={
                                        currentFields[editing.editIndex]
                                    }
                                    index={editing.editIndex}
                                    updateField={updateField}
                                />
                            )}
                        </div>
                        <div id="formPreview">
                            <CurrentForm
                                currentFields={currentFields}
                                formId={formId}
                                removeField={removeField}
                                saveForm={saveForm}
                                beginEditing={beginEditing}
                                history={history}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <button onClick={handleSignIn}>Sign in!</button>
                </div>
            )}
        </>
    );
};

const App = connect(mapStateToProps, mapDispatchToProps)(FormApp);

export default App;

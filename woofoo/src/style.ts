export const Styles: { [key: string]: React.CSSProperties } = {
    navBar: {
        padding: "10px",
        background: "#e66760",
        display: "grid",
        gridAutoFlow: "column",
    },

    navBarButtons: {
        alignSelf: "center",
        justifySelf: "center",
    },

    app: {
        display: "grid",
        width: "100%",
        height: "100%",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "10% 90%",
    },

    stage: {
        display: "grid",
        gridTemplateColumns: "40% 60%",
    },

    side: {
        padding: "10px",
        display: "flex",
        background: "#FFE79F",
        flexFlow: "column wrap",
        columnGap: "5%",
        rowGap: "5%",
        justifyContent: "start",
        alignItems: "center",
    },

    fieldButton: {
    },
    signIn: {},
    formButtons: {
        background: "#FFE79F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    currentFormEditing: {
        display: "grid",
        gridTemplateRows: "90% 10%",
        gridTemplateColumns: "1fr",
        overflow: "hidden",
    },
    currentFormPreview: {
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        overflow: "scroll",
    },
};

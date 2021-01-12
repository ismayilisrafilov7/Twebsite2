const styles=theme=>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: theme.shape.borderRadius,
        border:"1px solid black",
        padding:theme.spacing.unit *2,
        paddingBottom:theme.spacing.unit *3,
        backgroundColor: "white"
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
})
export default styles;
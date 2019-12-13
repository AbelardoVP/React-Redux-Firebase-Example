import firebase from 'firebaseConfig'

const databaseRef = firebase.database().ref();
const statCardsRef = databaseRef.child("stat-cards")

const addStatCardAction = (
    statName,
    statDescription,
    statIcon,
    statIconColor,
    statFooterIcon,
    statFooterIconState,
    statFooterPercentage,
    statFooterText
) => async dispatch => {

    statCardsRef.push().set({
        statName: statName,
        statDescription: statDescription,
        statIcon: statIcon,
        statIconColor: statIconColor,
        statFooterIcon: statFooterIcon,
        statFooterIconState: statFooterIconState,
        statFooterPercentage: statFooterPercentage,
        statFooterText: statFooterText
    }).then(() => {
        dispatch({
            type: "addStatCard",
        })
    })


}
export default addStatCardAction
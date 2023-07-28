// @generated automatically by Diesel CLI.

diesel::table! {
    users (user_id) {
        user_id -> Varchar,
        user_name -> Varchar,
        email -> Varchar,
        password -> Varchar,
    }
}

// @generated automatically by Diesel CLI.

diesel::table! {
    events (id) {
        id -> Varchar,
        title -> Varchar,
        image_url -> Varchar,
        event_date -> Varchar,
        details -> Nullable<Text>,
    }
}

diesel::table! {
    users (user_id) {
        user_id -> Varchar,
        user_name -> Varchar,
        email -> Varchar,
        password -> Varchar,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    events,
    users,
);

use diesel::prelude::*;
use uuid::Uuid;

use crate::models;

type DbError = Box<dyn std::error::Error + Send + Sync>;

/// Run query using Diesel to find user by uid and return it.
pub fn find_user_by_uid(
    conn: &mut PgConnection,
    uid: Uuid,
) -> Result<Option<models::User>, DbError> {
    use crate::schema::users::dsl::*;

    let user = users
        .filter(user_id.eq(uid.to_string()))
        .first::<models::User>(conn)
        .optional()?;

    Ok(user)
}

/// Run query using Diesel to insert a new database row and return the result.
pub fn insert_new_user(
    conn: &mut PgConnection,
    nm: &str, // prevent collision with `name` column imported inside the function
    e_mail: &str,
    pass_word: &str
) -> Result<models::User, DbError> {
    // It is common when using Diesel with Actix Web to import schema-related
    // modules inside a function's scope (rather than the normal module's scope)
    // to prevent import collisions and namespace pollution.
    use crate::schema::users::dsl::*;

    let new_user = models::User {
        user_id: Uuid::new_v4().to_string(),
        user_name: nm.to_owned(),
        email: e_mail.to_owned(),
        password: pass_word.to_owned(),
    };

    diesel::insert_into(users).values(&new_user).execute(conn)?;

    Ok(new_user)
}

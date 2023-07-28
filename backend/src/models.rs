use serde::{Deserialize, Serialize};

use crate::schema::users;

/// User details.
#[derive(Debug, Clone, Serialize, Deserialize, Queryable, Insertable)]
#[diesel(table_name = users)]
pub struct User {
    pub user_id: String,
    pub user_name: String,
    pub email: String,
    pub password: String,
}

/// New user details.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct NewUser {
    pub user_name: String,
    pub email: String,
    pub password: String,
}

impl NewUser {
    /// Constructs new user details from name.
    #[cfg(test)] // only needed in tests
    pub fn new(
        user_name: impl Into<String>,
        email: impl Into<String>,
        password: impl Into<String>
    ) -> Self {
        Self {
            user_name: user_name.into(),
            email: email.into(),
            password: password.into()
        }
    }
}

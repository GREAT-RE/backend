const passwordReset = (email, newPassword) => {
    return `
    Hello ${email}
    
    A new password is been requested by this email:${email} 
    
    This is your temporary password: ${newPassword}
    
    For security reasons, please change your temporary password after logging in.
    
    Thanks!
    Greater Team
    `
}

const enquire = (user) => {
    return `
    Hello,
    
    First Name: ${user.firstName},
    Last Name: ${user.lastName},
    Email: ${user.email}
    
    Thanks!
    Greater Team
    `
}


module.exports = {
    passwordReset,
    enquire
}
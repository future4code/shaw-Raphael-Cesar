

export const goToHomePage = (navigate) => {
    navigate.push("/")
    }

export const goToLoginPage = (navigate) => {
    navigate.push("/login")
}

export const goToApplicationFormPage = (navigate) => {
    navigate.push("/trips/application")
}

export const goToCreateTripPage = (navigate) => {
    navigate.push("/admin/trips/create")
}

export const goToListTripsPage = (navigate) => {
    navigate.push("/trips/list")
}

export const goToTripDetailsPage = (navigate) => {
    navigate.push("/admin/trips/:id")
}

export const goToAdminHomePage = (navigate) => {
    navigate.push("/admin/trips/list")
}

export const goBack = (navigate) => {
    navigate.push(-1)
}
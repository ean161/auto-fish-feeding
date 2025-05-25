import API from './api';

const verifyDeviceCode = async (deviceCode) => {
    return API.post("https://ean.vn/models/project/aff/auth", {
        deviceCode
    });
}

export default auth;
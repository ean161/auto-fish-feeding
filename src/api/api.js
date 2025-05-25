const API = {
    async get(url) {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("GET error:", error);
            throw error;
        }
    },

    async post(url, payload) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("POST error:", error);
            throw error;
        }
    }
}

export default API;
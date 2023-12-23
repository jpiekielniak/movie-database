import { useEffect, useState } from 'react';
import { JwtPayload, jwtDecode } from 'jwt-decode';

type Token = string | null;

const useDecodeToken = (token: Token): JwtPayload | null => {
    const [decoded, setDecoded] = useState<JwtPayload | null>(null);

    useEffect(() => {
        if (token) {
            const decodedToken: JwtPayload = jwtDecode(token);
            setDecoded(decodedToken);
        }
    }, [token]);

    return decoded;
};

export default useDecodeToken;
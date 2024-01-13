import { useEffect, useState } from 'react';
import { JwtPayload, jwtDecode } from 'jwt-decode';

type Token = string | null;

const useDecodeToken = (token: Token): JwtPayload | null => {
    const [decoded, setDecoded] = useState<JwtPayload | null>(null);

    useEffect(() => {
        setDecoded(token ? jwtDecode(token) : null);
    }, [token]);

    return decoded;
};

export default useDecodeToken;

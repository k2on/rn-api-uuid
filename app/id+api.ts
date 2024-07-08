import 'react-native-get-random-values';
import { v4 } from "uuid";

export function GET() {
    return Response.json({ id: v4() });

}

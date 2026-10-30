import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js';

// The client automatically reads ELEVENLABS_API_KEY from environment
export const elevenlabs = new ElevenLabsClient();
export default elevenlabs;

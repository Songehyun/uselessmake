import ImageSelector from './components/ImageSelector';

// Amplify 관련 코드 추가
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports'; // Amplify 설정 파일 임포트
Amplify.configure(awsExports);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ImageSelector />
    </main>
  );
}

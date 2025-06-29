import { Feather } from '@expo/vector-icons';
import clsx from 'clsx';
import { useMessageInputContext } from 'stream-chat-expo';

import Button from './Button';

const SendButton = () => {
  const { sendMessage, text, numberOfUploads } = useMessageInputContext();

  if (!text && numberOfUploads === 0) return null;

  return (
    <Button
      variant="plain"
      onPress={sendMessage}
      className={clsx('p-0.5 bg-primary rounded-full')}
    >
      <Feather name="arrow-up" size={24} color="white" />
    </Button>
  );
};

export default SendButton;

import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import {
  modalContentAtom,
  modalOpenAtom,
  sendingFriendAtom,
  typingContentAtom,
  unboxingObjectAtom,
} from '@/states/unboxingModalStates';
import { useAtom, useAtomValue } from 'jotai';
import { ButtonWrapper } from '@/pages/Inventory/InventoryPage.styles';
import * as S from '@/components/organisms/Unboxing/Modal/Complete.styles';
import Modal from '@/components/molecules/Modal/Modal';
import { getToday } from '@/utils/getToday';
import { UNBOXING_MODAL_NAME } from '@/constants/unboxing';
import { QueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { CHILDREN_PATH } from '@/constants/path';
import { resetUnboxingModal } from '@/utils/resetUnboxingModal';

const Complete = () => {
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [, setModalContent] = useAtom(modalContentAtom);
  const [typingContent, setTypingContent] = useAtom(typingContentAtom);
  const [unboxingObject, setUnboxingObject] = useAtom(unboxingObjectAtom);

  const handleConfirm = () => {
    setModalContent(UNBOXING_MODAL_NAME.SENDING_LIST);
  };


  const handleGet = () => {
    setModalOpen(false);
    setModalContent(UNBOXING_MODAL_NAME.TEXT_TYPING);
    setTypingContent('');
    setUnboxingObject({
      glbPath: '',
      pngPath: '',
      gifPath: '',
      userObjectId: 0,
    });
    window.location.reload();
  };

  // 조사 맞춤 함수
  const getPostposition = (word: string) => {
    if (!word) return '가';

    const lastChar = word[word.length - 1];
    const uniCode = lastChar.charCodeAt(0);

    if (uniCode < 0xac00 || uniCode > 0xd7a3) {
      return '가';
    }

    return (uniCode - 0xac00) % 28 !== 0 ? '이' : '가';
  };

  return (
    <Modal height={31} isOpen={modalOpen}>
      <S.ModalWrapper>
        <S.ObjectBox>
          <S.DateBox>
            <Text size={'small1'} fontWeight={'bold'} color={'grey1'}>
              {getToday()}
            </Text>
          </S.DateBox>
          <Image src={unboxingObject.gifPath} $unit={'px'} height={250} />
        </S.ObjectBox>
        <Text
          size="body1"
          fontWeight="bold"
          $marginBottom="20px"
          $lineHeight="1.4"
        >
          축하합니다!
          <br />
          {typingContent}
          {getPostposition(typingContent)} 도착했어요!
        </Text>
        <ButtonWrapper>
          <Button option={'ghost'} size={'medium'} onClick={handleConfirm}>
            선물하기
          </Button>
          <Button option={'activated'} size={'medium'} onClick={handleGet}>
            가지기
          </Button>
        </ButtonWrapper>
      </S.ModalWrapper>
    </Modal>
  );
};

export default Complete;

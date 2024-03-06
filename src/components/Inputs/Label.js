import './Input.scss';

const Label = ({ randomUuid, labelTitle }) => {
  return (
    <label htmlFor={randomUuid} className={'_labelStyle peerFocusBlueText grayText'}>
      <span>
        {labelTitle}
      </span>
    </label>
  );
}

export default Label;

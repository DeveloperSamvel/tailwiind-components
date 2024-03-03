import { useState } from 'react';
import PasswordIcon from '../components/Icons/PasswordIcon';
import LockIcon from '../components/Icons/LockIcon';
import InputMUI from '../components/Inputs/InputMUI';
import Button from '../components/Buttons/Button';
import Grid from '../components/Grid';

const SignUp = () => {
  const [unlock, setUnlock] = useState(false);
  const [unlockFocus, setUnlockFocus] = useState(false);
  const [unlockRepeat, setUnlockRepeat] = useState(false);
  const [unlockRepeatFocus, setUnlockRepeatFocus] = useState(false);

  return (
    <Grid
      fullWidth
    >
      <Grid className="mb-5" fullWidth>
        <InputMUI
          labelTitle="First Name"
          type="text"
          placeholder="First Name"
          fullWidth
        />
      </Grid>
      <div className="mb-5">
        <InputMUI
          labelTitle="Last Name"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-5">
        <InputMUI
          labelTitle="Your Email"
          type="email"
          placeholder="name@email.com"
        />
      </div>
      <div className="mb-5">
        <InputMUI
          labelTitle="Your phone number"
          type="text"
          placeholder="+374 (77) 18 23 25"
        />
      </div>
      <div className="mb-5">
        <InputMUI
          labelTitle="Your password"
          unlock={unlock}
          setUnlock={setUnlock}
          focus={unlockFocus}
          setFocus={setUnlockFocus}
          placeholder="•••••••••"
        >
          {unlock ? <LockIcon /> : <PasswordIcon />}
        </InputMUI>
      </div>
      <div className="mb-5">
        <InputMUI
          labelTitle="Confirm password"
          unlock={unlockRepeat}
          setUnlock={setUnlockRepeat}
          focus={unlockRepeatFocus}
          setFocus={setUnlockRepeatFocus}
          placeholder="•••••••••"
        >
          {unlockRepeat ? <LockIcon /> : <PasswordIcon />}
        </InputMUI>
      </div>
      <div className="mb-5">
        <Button text="SignUp" />
      </div>
    </Grid>
  );
};

export default SignUp;

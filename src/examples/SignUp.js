import { useState } from 'react';
import InputMUI from '../components/Inputs/InputMUI';
import Button from '../components/Buttons/Button';
import Grid from '../components/Grid';

const SignUp = () => {
  // const [unlockFocus, setUnlockFocus] = useState(false);
  // const [unlockRepeat, setUnlockRepeat] = useState(false);
  // const [unlockRepeatFocus, setUnlockRepeatFocus] = useState(false);

  return (
    <Grid className="mt-10 max-w-screen-sm" container fullWidth>
      <Grid className="mb-5" fullWidth>
        <InputMUI
          labelTitle="First Name"
          placeholder="First Name"
          fullWidth
        />
      </Grid>
      <div className="mb-5">
        <InputMUI
          labelTitle="Last Name"
          placeholder="Last Name"
          fullWidth
        />
      </div>
      <div className="mb-5">
        <InputMUI
          labelTitle="Your Email"
          type="email"
          placeholder="name@email.com"
          fullWidth
        />
      </div>
      <div className="mb-5">
        <InputMUI
          labelTitle="Your phone number"
          placeholder="+374 (77) 18 23 25"
          fullWidth
        />
      </div>
      <div className="mb-5">
        <InputMUI
          labelTitle="Your password"
          type="password"
          // unlock={unlock}
          // setUnlock={setUnlock}
          // focus={unlockFocus}
          // setFocus={setUnlockFocus}
          placeholder="•••••••••"
          fullWidth
        />
        {/* </InputMUI> */}
      </div>
      <div className="mb-5">
        <InputMUI
          labelTitle="Confirm password"
          type="password"
          // unlock={unlockRepeat}
          // setUnlock={setUnlockRepeat}
          // focus={unlockRepeatFocus}
          // setFocus={setUnlockRepeatFocus}
          placeholder="•••••••••"
          fullWidth
        />
          {/* {unlockRepeat ? <LockIcon /> : <PasswordIcon />}
        </InputMUI> */}
      </div>
      <div className="mb-5">
        <Button text="SignUp" />
      </div>
    </Grid>
  );
};

export default SignUp;

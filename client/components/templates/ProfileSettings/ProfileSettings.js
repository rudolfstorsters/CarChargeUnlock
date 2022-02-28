import React from 'react';
import ChangeUsername from '_organisms/ChangeUsername';

export default function ProfileSettings() {
  return (
    <div className="profile-settings">
      <div className="account-settings">
        <ChangeUsername />
      </div>
    </div>
  );
}

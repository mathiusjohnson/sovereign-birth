import React from 'react';
import birthBelly from '../../assets/images/DSC_6667.jpg'

const Values = () => {
  return (
    <div className="grid md:grid-cols-2  my-24 items-center">
    <div className="w-5/6 mx-auto my-auto">
      <img width="" src={birthBelly} alt="pregnant belly in light pink dress" />
    </div>
    <div className="mx-4 mt-4 md:mt-0 space-y-2">
      <h3 className="text-lg font-semibold">On the value of doulas…</h3>
      <p className="leading-7 text-lg">
      The development of prenatal testing and standardized care has contributed to making birth physically safer, but what our current medical model of birth fails to address is emotional and mental safety. One of the costs of this reality, is that as many as one in three people describe their experience of birth as being traumatic. Our industrialized model of care is not set up to acknowledge the complex and individual psychosocial and emotional needs of birthing people, which is why labour support is so essential. As doulas we are able to fill in these gaps left by the medical system. Our intention as doulas is to walk with pregnant families as they navigate their own autonomous birth journey. We believe birth can and should be both safe and satisfying, and that it is the right of each unique birthing family to determine what feels safe for them. We want to get to the heart of what each family truly desires from their birth experience, as we know it will become one of their most significant and lasting memories.
      </p>
    </div>
  </div>
  );
};

export default Values;
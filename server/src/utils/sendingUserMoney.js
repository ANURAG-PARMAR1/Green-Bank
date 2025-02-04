import { User } from '../models/user.model.js';

export const sendingUserMoney = async (user_present_id,user, money) => {
  try {
    console.log("user ID: ",user_present_id);
    if(!(await User.findOne(user))) {
        throw new Error('User not found');
    }

    const updatedDetails1 = await User.findByIdAndUpdate(user._id,  { $inc: { amount: money } }, { new: true, runValidators: true });

    if (!updatedDetails1) {
        console.log("Something went wrong");
        return null;
    }

    console.log("Money Sent to :", updatedDetails1);

    const updatedDetails2 = await User.findByIdAndUpdate(
        user_present_id, 
        { $inc: { amount: -money } }, 
        { new: true, runValidators: true } 
      );

    console.log("Money Sent by :", updatedDetails2);
    if (!updatedDetails2) {
        console.log("Something went wrong");
        return null;
    }
    return updatedDetails2;
    console.log("Money Dedected from :", updatedDetails2);

  } catch (error) {
    console.log(error);
  }
};
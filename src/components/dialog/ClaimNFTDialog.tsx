import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useDialog from "@/store/UIProvider/dialog.store";
import { AlertCircle } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { useEffect, useState } from "react";
import { useContractWrite } from "wagmi";
import { addressList } from "@/constants/addressList";
import { CryptoCoffPoint__factory } from "@/typechain-types";
import { DialogStates, DialogViews } from "@/store/UIProvider/dialog.type";

export function ClaimNFTDialog() {
  const { closeDialog, setDialogState, id, setDialogView } = useDialog();
  const { writeAsync, isError, isSuccess } = useContractWrite({
    address: addressList.CryptoCoffPoint,
    abi: CryptoCoffPoint__factory.abi,
    functionName: "claimPoint",
    args: [BigInt(id)],
  });

  useEffect(() => {
    if (isSuccess) {
      setDialogState(DialogStates.SUCCESS);
    } else if (isError) {
      setDialogState(DialogStates.ERROR);
    }
  }, [isSuccess, isError, setDialogState]);

  const Claim = async () => {
    setDialogView(DialogViews.ADD_POINT_DIALOG);
    setDialogState(DialogStates.LOADING);
    await writeAsync();
  };

  return (
    <DialogContent className="max-w-[350px] ssm:max-w-[480px] px-5 rounded-2xl">
      <DialogHeader>
        <DialogTitle className=" break-words text-xl font-semibold w-[300px]">
          <span>Claim NFT</span>
        </DialogTitle>
      </DialogHeader>
      <hr className=" border-[#3D3D3D]" />

      <div className=" flex flex-row justify-start items-center gap-3">
        <div className="flex w-[48px] h-[48px] rounded-full bg-[#3D3D3D] justify-center items-center">
          <AlertCircle />
        </div>
        <h4 className=" font-normal">Are you sure want to Claim NFT?</h4>
      </div>

      <hr className=" border-[#3D3D3D]" />
      <div className=" flex flex-row gap-3 justify-end">
        <Button
          onClick={() => {
            closeDialog();
          }}
          type="button"
          variant="ghost"
          className=" px-3 font-semibold   w-[90px] h-[48px]"
          style={{
            borderRadius: "99px",
            background: "#3D3D3D",
          }}
        >
          <h5 className=" text-white font-medium">Cancel</h5>
        </Button>
        <Button
          onClick={() => {
            Claim();
          }}
          type="button"
          variant="ghost"
          className="lg:border-[1px] border-[0px] p-3  font-semibold  w-[90px] h-[48px]"
          style={{
            borderRadius: "99px",
            background: "linear-gradient(282.7deg, #FFA532 0%, #FF7000 72.62%)",
          }}
        >
          <h5 className=" text-white font-medium">Confirm</h5>
        </Button>
      </div>
    </DialogContent>
  );
}

// import { getEnv } from '@/utils/env';
// import { useReadContract, useWriteContract } from 'wagmi';
// import demoContract from '@/abi/demoContract.json';

// export function useValue() {
//   const result = useReadContract({
//     address: getEnv('CONTRACT_ADDRESS') as `0x${string}`,
//     abi: demoContract.abi,
//     functionName: 'getValue',
//   });

//   return result;
// }


// export function useSetValue() {
//   const { writeContract, isPending, data, error } = useWriteContract();

//   const write = (value: number) => {
//     writeContract({
//       address: getEnv('CONTRACT_ADDRESS') as `0x${string}`,
//       abi: demoContract.abi,
//       functionName: 'setValue',
//       args: [value],
//     });
//   };

//   return { write, isPending, data, error };
// }

export default {}
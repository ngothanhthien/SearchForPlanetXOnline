export const researchClueMapping={
    confClueNoXWithinNY: (x,y,n)=>`No ${x} is within ${n} sectors of a ${y}.`,
    confClueAllXWithinNY: (x,y,n)=>`Every ${x} is within ${n} sectors of a ${y}.`,
    confClueAllXWithinN:(x,y,n)=>`All the ${x}s are in a band of ${n} sectors or less.`,
    confClue1PlusXAdjacentY:(x,y)=>`At least one ${x} is adjacent to a ${y}.`,
    confClueNoXOppositeY:(x,y)=>`No ${x} is directly opposite a ${y}.`,
    confClue1PlusXOppositeY:(x,y)=>`At least one ${x} is directly opposite a ${y}.`,
}
export const xClueMapping={
    confClue9NotWithinNY:(y,n)=>`Planet X is not within ${n} sectors of a ${y}.`,
    confClue9NotOppositeY:(y)=>`Planet X is not directly opposite a ${y}.`,
    confClue9NotWithin1Y:(y)=>`Planet X is not adjacent to a ${y}.`,
    confClue9WithinNY:(y,n)=>`Planet X is within ${n} sectors of a ${y}.`,
} 
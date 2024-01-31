import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CardStack from './CardStack.jsx';

export const PokerCardBuilderDialog = ({ open, onClose }) => {

    return (
        <Dialog fullWidth={true} maxWidth="sm" open={open} onClose={onClose}>
            <DialogTitle>Create Poker Card Stack</DialogTitle>
            <DialogContent>
                <CardStack />
            </DialogContent>
        </Dialog>
    );
};


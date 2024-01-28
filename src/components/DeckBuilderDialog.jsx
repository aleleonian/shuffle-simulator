import * as React from 'react';
import { PokerCardBuilderDialog } from './PokerCardBuilderDialog';

export function DeckBuilderDialog({ open, handleClose }) {
    return (
        <React.Fragment>

            <PokerCardBuilderDialog
                open={open}
                onClose={handleClose}
            />

        </React.Fragment>
    );
}

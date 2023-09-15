import {
    Box,
    Input,
    Tag,
    TagLabel,
    TagCloseButton,
    Wrap
} from "@chakra-ui/react";
import { useState } from "react";

const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = (email) => EMAIL_REGEXP.test(email);


export const Chip = ({ email, onCloseClick }) => (
    <Tag key={email} borderRadius="full" variant="solid" colorScheme="green">
        <TagLabel>{email}</TagLabel>
        <TagCloseButton
            onClick={() => {
                onCloseClick(email);
            }}
        />
    </Tag>
);


export const ChipList = ({ emails = [], onCloseClick }) => (
    <Wrap spacing={1} mb={3}>
        {emails.map((email) => (
            <Chip email={email} key={email} onCloseClick={onCloseClick} />
        ))}
    </Wrap>
);


export const ChipEmailInput = ({ ...rest }) => (
    <Box>
        <Input type="email" {...rest} />
    </Box>
);


export const EmailChipInput = ({ initialEmails = [] }) => {
    const [inputValue, setInputValue] = useState("");
    const [emails, setEmails] = useState(initialEmails);


    const emailChipExists = (email) => emails.includes(email);


    const addEmails = (emailsToAdd) => {
        const validatedEmails = emailsToAdd
            .map((e) => e.trim())
            .filter((email) => isValidEmail(email) && !emailChipExists(email));

        const newEmails = [...emails, ...validatedEmails];

        setEmails(newEmails);
        setInputValue("");
    };


    const removeEmail = (email) => {
        const index = emails.findIndex((e) => e === email);
        if (index !== -1) {
            const newEmails = [...emails];
            newEmails.splice(index, 1);
            setEmails(newEmails);
        }
    };


    const handleChange = (e) => {
        setInputValue(e.target.value);
    };


    const handleKeyDown = (e) => {
        if (["Enter", "Tab", ","].includes(e.key)) {
            e.preventDefault();

            addEmails([inputValue]);
        }
    };


    const handlePaste = (e) => {
        e.preventDefault();

        const pastedData = e.clipboardData.getData("text");
        const pastedEmails = pastedData.split(",");
        addEmails(pastedEmails);
    };

    const handleCloseClick = (email) => {
        removeEmail(email);
    };

    return (
        <>
            <ChipList emails={emails} onCloseClick={handleCloseClick} />

            <ChipEmailInput
                placeholder="enter emails"
                onPaste={handlePaste}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                value={inputValue}
            />
        </>
    );
};

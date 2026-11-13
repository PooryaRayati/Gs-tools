import { Notification } from '@mantine/core';

export default function Notif({ color, text, title }: { color: string, text: string, title: string }) {
    return (
        <div className="fixed left-5 top-10">
            <Notification color={`${color}`} title={`${title}`} bg={`${color === "red" ? "#ff030342" : "#18ff0342"}`} withCloseButton={false} hidden>
                {text}
            </Notification>
        </div>
    );
}
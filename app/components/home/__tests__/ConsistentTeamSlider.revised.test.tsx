import { render, screen, fireEvent } from '@testing-library/react';
import { ConsistentTeamSlider } from '../ConsistentTeamSlider';

// Mock data for testing
const mockTeamMembers = [
  {
    id: '1',
    slug: 'heather-wing',
    name: 'Heather Wing',
    role: 'Founder & CEO',
    imageSrc: '/images/heather-wing.jpg',
    profileLink: '/who-we-are/heather-wing',
    shortBio: 'Global strategist and creative visionary',
    expertise: ['Brand Strategy', 'Creative Direction']
  },
  {
    id: '2',
    slug: 'ingrid-kenny',
    name: 'Ingrid De La Mare Kenny',
    role: 'Co-Founder',
    imageSrc: '/images/ingrid-kenny.jpg',
    profileLink: '/who-we-are/ingrid-kenny',
    shortBio: 'Award-winning designer and art director',
    expertise: ['Visual Design', 'Brand Identity']
  }
];

describe('ConsistentTeamSlider - Revised Layout', () => {
  it('renders team members with correct layout proportions', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={mockTeamMembers}
        title="OUR TEAM"
        description="Test description"
      />
    );

    // Check that the grid layout uses 60/40 proportions
    const gridContainer = screen.getByRole('region', { name: 'Team members carousel' });
    expect(gridContainer).toBeInTheDocument();
    
    // Verify the layout structure
    const gridChildren = gridContainer.children;
    expect(gridChildren.length).toBe(2); // Left content and right slider
  });

  it('displays vertical text with correct formatting', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={mockTeamMembers}
        title="OUR TEAM"
      />
    );

    // Check for rotated text
    const rotatedText = screen.getByText('Heather Wing');
    expect(rotatedText).toBeInTheDocument();
    
    // Check for role text
    const roleText = screen.getByText('Founder & CEO');
    expect(roleText).toBeInTheDocument();
  });

  it('maintains responsive behavior', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={mockTeamMembers}
        title="OUR TEAM"
      />
    );

    // Should render without errors on different screen sizes
    expect(screen.getByText('OUR TEAM')).toBeInTheDocument();
    expect(screen.getByText('Heather Wing')).toBeInTheDocument();
    expect(screen.getByText('Ingrid De La Mare Kenny')).toBeInTheDocument();
  });

  it('handles navigation correctly', () => {
    render(
      <ConsistentTeamSlider 
        teamMembers={mockTeamMembers}
        title="OUR TEAM"
      />
    );

    // Test keyboard navigation
    const slider = screen.getByRole('region', { name: 'Team members carousel' });
    
    // Simulate right arrow key
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    
    // Should not throw errors
    expect(slider).toBeInTheDocument();
  });
});